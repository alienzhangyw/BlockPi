const {
    app,
    BrowserWindow,
    screen,
    Menu,
    ipcMain,
    shell,
    globalShortcut,
    nativeImage
} = require('electron')
const { autoUpdater } = require("electron-updater")

try { require("electron-reload")('BlockPi', {electron: 'node_modules/electron/dist/electron.exe'}) } catch {}

// 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被
// 垃圾回收的时候，window对象将会自动的关闭
let win

function createWindow() {
    // 创建浏览器窗口。
    const {
        width,
        height
    } = screen.getPrimaryDisplay().workAreaSize
    win = new BrowserWindow({
        width: width * 0.6,
        height: height * 0.8,
        backgroundColor: '#2e2c29',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        icon: nativeImage.createFromPath('BlockPi/src/media/logo_32x32.png')
    })

    // 加载index.html文件
    win.loadFile('./BlockPi/index.html')

    // 当 window 被关闭，这个事件会被触发。
    win.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        win = null
    })
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', function () {
    new Menu()
    Menu.setApplicationMenu(null)
    createWindow()
    // 绑定快捷键打开开发者工具。
    globalShortcut.register('CommandOrControl+Shift+I', () => {
        win.webContents.isDevToolsOpened() ? win.webContents.closeDevTools() : win.webContents.openDevTools()
    })
    autoUpdater.checkForUpdatesAndNotify()
})

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (win === null) {
        createWindow()
    }
})

app.on('web-contents-created', (e, webContents) => {
    // 使用默认浏览器打开外部链接。
    webContents.on('new-window', (event, url) => {
        event.preventDefault()
        shell.openExternal(url)
    })
})

app.on('will-quit', () => {
    globalShortcut.unregisterAll()
})

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。

ipcMain.on('app-version', (event, arg) => {
    event.sender.send('app-version', { version: app.getVersion() })
})