# WFC_VPN
这里的并不一定适合所有人，仅个人使用说需要
除了js是通用，其他都有对应分类，软件不通用

### 插件说明
- 插件具有时效性
- 重写、MITM、脚本都打开
- 有些脚本并不在此而在本地

### 后期添加
- 慢慢把本地脚本改成远程仓库


# GitHub Actions文件说明
- 先执行htmlrun.yml自动化在执行azure-static-web-apps-proud-coast-042044210.yml，无论htmlrun.yml工作流程是否成功，azure-static-web-apps-proud-coast-042044210.yml工作流程都会被触发。

- 单独使用方法

### azure-...-042044210.yml
```
name: Azure上传静态页面

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - name: Checkout Repo
        uses: actions/checkout@v2
        with:
          submodules: true
          lfs: false
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_PROUD_COAST_042044210 }}
          repo_token: ${{ secrets.GITHUB_TOKEN }} # Used for Github integrations (i.e. PR comments)
          action: "upload"
          app_location: "/" # App source code path
          api_location: "" # Api source code path - optional
          output_location: "/" # Built app content directory - optional

  close_pull_request_job:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Close Pull Request Job
    steps:
      - name: Close Pull Request
        id: closepullrequest
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_PROUD_COAST_042044210 }}
          action: "close"
```

### htmlrun.yml
```
name: Generate HTML

on:
  push:
    branches:
      - main  # 或者你的默认分支
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: 3.8

    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip

    - name: Generate HTML
      run: python generate_html.py

    - name: Commit changes
      run: |
        git config --local user.email "action@github.com"
        git config --local user.name "GitHub Action"
        git add index.html
        git commit -m "Generate HTML"
        git push
```