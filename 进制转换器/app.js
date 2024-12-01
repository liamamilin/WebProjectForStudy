// 获取元素
const decimalInput = document.getElementById("decimalInput");
const convertButton = document.getElementById("convertButton");
const resultDiv = document.getElementById("result");

// 递归函数：十进制转二进制
function decimalToBinary(n) {
    // 基础情况：当 n 为 0 时，停止递归
    if (n === 0) {
        return '';
    }
    // 递归：获取当前位的二进制值并继续处理剩余的部分
    return decimalToBinary(Math.floor(n / 2)) + (n % 2);
}

// // 点击转换按钮时的事件处理函数
// convertButton.addEventListener("click", function() {
//     // 获取用户输入的十进制数
//     const decimalValue = parseInt(decimalInput.value, 10);

//     // 检查输入是否合法
//     if (isNaN(decimalValue) || decimalValue < 0) {
//         resultDiv.innerText = "请输入一个有效的十进制数！";
//     } else {
//         // 使用递归转换十进制到二进制
//         const binaryValue = decimalToBinary(decimalValue);
        
//         // 如果输入为 0，特殊处理
//         const result = binaryValue === '' ? '0' : binaryValue;
        
//         // 显示结果
//         resultDiv.innerText = `二进制结果: ${result}`;
//     }
// });


// 动画效果：逐步展示递归过程
function decimalToBinaryWithAnimation(n, step = 0, result = '') {
    if (n === 0) {
        return result;
    }

    const currentBit = n % 2;
    const remaining = Math.floor(n / 2);

    // 显示当前递归步骤
    setTimeout(() => {
        resultDiv.innerText = `步骤 ${step}: 当前位 = ${currentBit}, 剩余 = ${remaining}`;
    }, step * 1000);

    // 继续递归并拼接当前位
    return decimalToBinaryWithAnimation(remaining, step + 1, result + currentBit);
}

// 点击转换按钮时的事件处理函数（包含动画效果）
convertButton.addEventListener("click", function() {
    const decimalValue = parseInt(decimalInput.value, 10);

    if (isNaN(decimalValue) || decimalValue < 0) {
        resultDiv.innerText = "请输入一个有效的十进制数！";
    } else {
        resultDiv.innerText = "正在转换...";
        
        // 先调用递归函数，不直接显示结果
        const binaryValue = decimalToBinaryWithAnimation(decimalValue, 0, '');
        
        // 等待所有步骤完成后，显示最终结果
        setTimeout(() => {
            const result = binaryValue === '' ? '0' : binaryValue;
            resultDiv.innerText = `二进制结果: ${result}`;
        }, (Math.floor(Math.log2(decimalValue)) + 1) * 1000); // 计算动画总时长
    }
});

