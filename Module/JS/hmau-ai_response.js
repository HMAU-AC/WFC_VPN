var htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>正则提取规则</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding: 20px;
    background-color: #f4f4f4;
    color: #333;
}

.container {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    max-width: 1200px;
    margin: auto;
}

textarea {
    width: 100%;
    height: auto;
    padding: 8px;
    margin: 10px 0;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    resize: none;
    max-height: 50vh;
    overflow-y: auto;
}

.hidden {
    display: none;
}

label {
    font-weight: bold;
}

.container .hidden {
    position: relative; /* 设置为相对定位的容器 */
    display: none;
    margin-top: 10px;

}

.copy-button {
    position: absolute;
    top: 5px; /* 调整顶部位置 */
    right: 5px; /* 调整右侧位置 */
    padding: 5px 10px;
    font-size: 12px;
    color: #fff;
    background-color: #007aff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 1.5s ease;
}

.copy-button:hover {
    background-color: #0056b3;
}
.copy-button.success {
    background-color: #4CAF50;  // 成功时的背景颜色
}

/* 浅色模式 */
@media (prefers-color-scheme: light) {
    body {
        background-color: #f4f4f4;
        color: #333;
    }

    .container {
        background: white;
    }

    .copy-button {
        background-color: #007aff;
        color: #fff;
    }

    .copy-button:hover {
        background-color: #0056b3;
    }
    textarea {
        background-color: #fff; /* 浅色背景 */
        color: #333; /* 深色文本 */
        border-color: #ccc;
    }
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
    body {
        background-color: #282828; /* 深色背景 */
        color: #ccc; /* 浅色文本 */
    }

    .container {
        background: #333;
    }

    .copy-button {
        background-color: #007aff;
        color: #fff;
    }

    .copy-button:hover {
        background-color: #0056b3;
    }
    textarea {
        background-color: #333; /* 深色背景 */
        color: #ccc; /* 浅色文本 */
        border-color: #555;
    }
}
    </style>
</head>
<body>
    <div class="container">
        <label for="userInput">输入源规则:</label>
        <textarea id="userInput" oninput="matchInput()" placeholder="Type here..." rows="4"></textarea>

        <div id="match1" class="hidden">
            <label for="output1">代理规则:</label>
            <textarea id="output1" readonly rows="2"></textarea>
            <button onclick="copyText('output1')" class="copy-button">Copy</button>
        </div>
        
        <div id="match2" class="hidden">
            <label for="output2">广告规则:</label>
            <textarea id="output2" readonly rows="2"></textarea>
            <button onclick="copyText('output2')" class="copy-button">Copy</button>
        </div>
    </div>

<script>
    function adjustTextareaHeight(textarea) {
        textarea.style.height = 'auto';  // 先重置高度
        textarea.style.height = textarea.scrollHeight + 'px';  // 根据滚动高度设置新高度
    }
    
    function matchInput() {
        const userInput = document.getElementById('userInput');
        const output1 = document.getElementById('output1');
        const output2 = document.getElementById('output2');
    
        const regex1 = new RegExp("^DOMAIN-SUFFIX,([a-zA-Z0-9-]+\\.[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}|[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}),(HMAU|REJECT)", "gim");
        const regex2 = new RegExp("^DOMAIN-SUFFIX,([a-zA-Z0-9-]+\\.[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}|[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}),(香港|美国)", "gim");
    
        let matches1 = new Set();
        let matches2 = new Set();
    
        let match;
        while ((match = regex1.exec(userInput.value)) !== null) {
            matches1.add(match[0]);
        }
        while ((match = regex2.exec(userInput.value)) !== null) {
            matches2.add(match[0]);
        }
    
        if (matches1.size > 0) {
            output1.value = Array.from(matches1).join('\n');
            document.getElementById('match1').style.display = 'block';
            adjustTextareaHeight(output1);
        } else {
            document.getElementById('match1').style.display = 'none';
        }
    
        if (matches2.size > 0) {
            output2.value = Array.from(matches2).join('\n');
            document.getElementById('match2').style.display = 'block';
            adjustTextareaHeight(output2);
        } else {
            document.getElementById('match2').style.display = 'none';
        }
    
        adjustTextareaHeight(userInput);  // 调整用户输入框的高度
    }
</script>
<script>
    function copyText(elementId) {
        var textArea = document.getElementById(elementId);
        textArea.select();  // 选择文本
        document.execCommand("copy");  // 执行复制操作
    
        // 获取按钮元素
        var button = textArea.nextElementSibling;
        button.textContent = 'Success';  // 更改按钮文本为 'Success'
        button.classList.add('success');  // 添加 'success' 类来触发动画
    
        // 1.5秒后恢复原始状态
        setTimeout(function() {
            button.textContent = 'Copy';  // 恢复按钮文本为 'Copy'
            button.classList.remove('success');  // 移除 'success' 类
        }, 1500);
    }
    </script>

</body>
</html>
`;

var response = {
    status: '200 OK',
    headers: {'Content-Type': 'text/html'},
    body: htmlContent
};

$done(response);
