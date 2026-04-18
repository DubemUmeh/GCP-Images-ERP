"use client";

import React, { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
    console.log('mountung users')
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
    <main className="flex min-h-full items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
          <CardDescription>
            Select your profile and enter your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2 flex flex-col">
              <Label htmlFor="role">Profile</Label>
              <Select
                value={role}
                onValueChange={(value) => setRole(value as Role)}
              >
                <SelectTrigger id="role" className="w-full">
                  <SelectValue placeholder="Select a profile" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="users">Users</SelectItem>
                  {/* <SelectItem value="manager">Manager</SelectItem> */}
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 flex flex-col">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
              />
            </div>

            {error && <p className="text-sm font-medium text-destructive">{error}</p>}

            <Button type="submit" className="w-full py-5 font-semibold text-sm">
              Authenticate
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
