"use client";

import React, { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { listen } from "@tauri-apps/api/event";

const USERS = {
  users: { username: "users", password: "users123" },
  // manager: { username: "manager", password: "manager123" },
  admin: { username: "admin", password: "admin123" }
} as const;

type Role = keyof typeof USERS;

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("users");
  const [error, setError] = useState("");

  useEffect(() => {
    const unlisten = listen('reset-login', () => {
      setPassword('');
      setRole('users');
      setError('');
    })
    console.log('mountung window: ', getCurrentWindow().label);
    return () => {
      unlisten.then((f) => f());
    }
  }, []);

  const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valid = USERS[role];

    if (valid.password !== password) {
      setError("Invalid credentials for selected role.");
      return;
    }

    try {
      await invoke("authenticate_and_open_main", { role });
    } catch (invokeError) {
      setError(`Unable to open main app: ${String(invokeError)}`);
    }
  };

  return (
    <main className="flex flex-col min-h-full w-full items-center justify-center p-2 bg-foreground/10">
      <Card className="h-fit w-fit overflow-hidden p-1 rounded-sm">
        <CardContent className="p-2">
          <form onSubmit={onSubmit} className="w-full py-2 px-3 space-y-3 bg-white">
            <div className="space-y-2 space-x-2 flex justify-between items-center flex-row">
              <Label htmlFor="role" className="text-md font-semibold tracking-wider">Profile Name</Label>
              <Select
                value={role}
                onValueChange={(value) => setRole(value as Role)}
              >
                <SelectTrigger id="role" className="w-[280px] -mr-px rounded-md">
                  <SelectValue placeholder="Select a profile" className="font-semibold text-lg"/>
                </SelectTrigger>
                <SelectContent className="font-normal text-lg">
                  <SelectItem value="users">Users</SelectItem>
                  {/* <SelectItem value="manager">Manager</SelectItem> */}
                  <SelectItem value="admin" className="">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 space-x-2 flex flex-row justify-between items-center">
              <Label htmlFor="password" className="text-md font-semibold tracking-wider">Password</Label>
              <Input
                id="password"
                required
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                className="w-[280px] rounded-md"
              />
            </div>

            {error && <p className="text-xs font-medium text-destructive">{error}</p>}

            <Button type="submit" className="w-full py-5 font-semibold rounded-md text-sm">
              Log In
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
