Prerequisites Environment:
Visual Studio Code
Powershell
Selenium
Node.js
FireFox
npm

Folder for Test scrips JavaScript/typescript:  
C:\Users\jarom\TS>
 Directory of C:\Users\jarom\TS\src

09.01.2025  15:23               566 zad11Selenium.spec.js

C:\Users\jarom\TS>more package.json
...
   "@types/selenium-webdriver": "^4.1.27",
...

1) Run VSC - Visual Studio Code
2) Find/prepare Test script js in folder: C:\Users\jarom\TS
3) Open terminal in VSC
4) Run command line:
PS C:\Users\jarom\TS> fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression

5) Run command line:
PS C:\Users\jarom\TS> node src/zad11Selenium.spec.js

6) Script should run correctly (without any error)
7) Webpage https://handsontable.com/demo is loaded
8) Cookies are accepted via button "Allow all"
