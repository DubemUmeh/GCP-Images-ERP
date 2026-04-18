use tauri::{AppHandle, Emitter, Manager, WebviewUrl, WebviewWindowBuilder};

#[tauri::command]
fn authenticate_and_open_main(app: AppHandle, role: String) -> Result<(), String> {
  let main_window = app
    .get_webview_window("main")
    .ok_or_else(|| "Main window was not found".to_string())?;

  main_window
    .emit("role-selected", role)
    .map_err(|error| error.to_string())?;

  main_window.show().map_err(|error| error.to_string())?;
  main_window.set_focus().map_err(|error| error.to_string())?;

  if let Some(login_window) = app.get_webview_window("login") {
    login_window.close().map_err(|error| error.to_string())?;
  }

  Ok(())
}

#[tauri::command]
fn logout_to_login(app: AppHandle) -> Result<(), String> {
  if let Some(main_window) = app.get_webview_window("main") {
    main_window.hide().map_err(|error| error.to_string())?;
  }

  if let Some(login_window) = app.get_webview_window("login") {
    login_window.show().map_err(|error| error.to_string())?;
    login_window.set_focus().map_err(|error| error.to_string())?;
  } else {
    let login_window = WebviewWindowBuilder::new(&app, "login", WebviewUrl::App("/login".into()))
      .title("Login")
      .inner_size(450.0, 300.0)
      .center()
      .resizable(false)
      .fullscreen(false)
      .build()
      .map_err(|error| error.to_string())?;

    login_window.show().map_err(|error| error.to_string())?;
    login_window.set_focus().map_err(|error| error.to_string())?;
  }

  Ok(())
}

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let _main = WebviewWindowBuilder::new(app, "main", WebviewUrl::App("/".into()))
        .title("GCP Images Printing Management System")
        .inner_size(1100.0, 760.0)
        .visible(false)
        .build()?;

      let _login = WebviewWindowBuilder::new(app, "login", WebviewUrl::App("/login".into()))
        .title("Login")
        .inner_size(450.0, 300.0)
        .center()
        .resizable(false)
        .fullscreen(false)
        .build()?;

      Ok(())
    })
    .invoke_handler(tauri::generate_handler![authenticate_and_open_main, logout_to_login])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
