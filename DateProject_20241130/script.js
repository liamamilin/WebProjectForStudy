// 获取当前日期并格式化
function getFormattedDate(format) {
    const today = new Date();
    
    const day = today.getDate(); // 获取日期 (1-31)
    const month = today.getMonth() + 1; // 获取月份 (1-12)，需要加1
    const year = today.getFullYear(); // 获取年份 (4位数)

    // 格式化日期
    let formattedDate = format;
    
    // 将格式中的日期、月份和年份替换为实际的数值
    formattedDate = formattedDate.replace('dd', String(day).padStart(2, '0')); // 保证两位数
    formattedDate = formattedDate.replace('mm', String(month).padStart(2, '0')); // 保证两位数
    formattedDate = formattedDate.replace('yyyy', year); // 年份不需要补充零

    return formattedDate;
}

// 显示日期
function displayDate() {
    const formatSelect = document.getElementById('format-select');
    const formattedDateElement = document.getElementById('formatted-date');
    
    const selectedFormat = formatSelect.value;
    
    // 获取并显示格式化后的日期
    const formattedDate = getFormattedDate(selectedFormat);
    formattedDateElement.innerText = formattedDate;
}

// 监听格式选择变化
document.getElementById('format-select').addEventListener('change', displayDate);

// 页面加载时显示日期
window.onload = displayDate;
