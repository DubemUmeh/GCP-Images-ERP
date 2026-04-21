use tauri::{AppHandle, Emitter, Manager, WebviewUrl, WebviewWindowBuilder};

#[tauri::command]
fn authenticate_and_open_main(app: AppHandle, role: String) -> Result<(), String> {
    let role_route = match role.as_str() {
        "admin" => "admin",
        "users" => "users",
        _ => return Err("Unsupported role provided".to_string()),
    };

    let main_window = app
        .get_webview_window("main")
        .ok_or_else(|| "Main window was not found".to_string())?;

    let script = format!(
    "window.localStorage.setItem('authenticated-role', '{role_route}'); window.location.replace('/{role_route}');"
  );

    main_window
        .eval(script.as_str())
        .map_err(|error| error.to_string())?;

    main_window
        .emit("role-selected", role_route)
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
        login_window
            .set_focus()
            .map_err(|error| error.to_string())?;
    } else {
        let login_window =
            WebviewWindowBuilder::new(&app, "login", WebviewUrl::App("/login".into()))
                .title("Login")
                .inner_size(450.0, 250.0)
                .center()
                .resizable(false)
                .fullscreen(false)
                .build()
                .map_err(|error| error.to_string())?;

        login_window.show().map_err(|error| error.to_string())?;
        login_window
            .set_focus()
            .map_err(|error| error.to_string())?;
    }

    Ok(())
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let _main = WebviewWindowBuilder::new(app, "main", WebviewUrl::App("/".into()))
                .title("Investment Desktop")
                .inner_size(1100.0, 760.0)
                .visible(false)
                .build()?;

            let _login = WebviewWindowBuilder::new(app, "login", WebviewUrl::App("/login".into()))
                .title("Login")
                .inner_size(450.0, 250.0)
                .center()
                .resizable(false)
                .fullscreen(false)
                .build()?;

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            authenticate_and_open_main,
            logout_to_login
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
