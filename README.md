# Bilibili 桌面播放器

基於Nativefier和Electron的Bilbil播放器，支援Windows及Mac。
Github上的Bilbil Client已沒有維護，也無法正常使用，因此我自己做了更簡單的客戶端。

## 功能
1. 基本Bilibili網站功能
2. 自動網頁全屏模式

整體介面雖然與Bilibili網站相同，但透過Javascript做了少許優化，以配合桌面使用，例如自動網頁全屏模式等。

## 下載

最新版本可 [在此取得](https://github.com/dollars0427/bilibili-player/releases).

## 操作捷徑

ESC：回到上一頁。

## 建構

你可以使用build.bash腳本建構播放器（需要先安裝[Nativefier](https://github.com/jiahaog/nativefier)）.

```bash
chmod +x build.bash
./build.bash
```
