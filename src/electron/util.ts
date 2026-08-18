import { app, ipcMain, WebContents } from "electron";

export function isDev(): boolean {
  return !app.isPackaged;
}

// IPC 

// Handle
export function ipcMainHandle<Key extends keyof EventPayloadMapping>(key: Key, handler: ()=> EventPayloadMapping[Key]){
  ipcMain.handle(key, ()=> handler());
}

// Send
export function ipcWebContentsSend<Key extends keyof EventPayloadMapping>(
  key: Key,
  webContents: WebContents,
  payload: EventPayloadMapping[Key]
){
  webContents.send(key, payload);
}