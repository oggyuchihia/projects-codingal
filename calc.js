

    <html>
        <head>
            <meta charset="UTF-8">
                <title>Simple Calculator</title>
                <style>
                    body {
                        font - family: Arial, sans-serif;
                    margin: 40px;
        }
                    label {
                        display: block;
                    margin: 10px 0;
        }
                    input, select {
                        margin - left: 8px;
        }
                    button {
                        margin - top: 16px;
                    padding: 8px 12px;
                    font-size: 1rem;
        }
                    #output {
                        margin - top: 20px;
                    font-weight: bold;
        }
                </style>
        </head>
        <body>
            <h2>Simple Calculator</h2>
            <p>Enter two numbers and choose an operation.</p>

            <label>
                First number:
                <input id="num1" type="number" placeholder="0">
            </label>
            <label>
                Second number:
                <input id="num2" type="number" placeholder="0">
            </label>
            <label>
                Operation:
                <select id="op">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
            </label>
            <button id="calculate">Calculate</button>

            <div id="output"></div>

            <script>
                const num1Input = document.getElementById('num1');
                const num2Input = document.getElementById('num2');
                const opInput = document.getElementById('op');
                const output = document.getElementById('output');
                const calculateButton = document.getElementById('calculate');

        calculateButton.addEventListener('click', () => {
            const num1 = Number(num1Input.value);
                const num2 = Number(num2Input.value);
                const op = opInput.value;

                let result;

                if (Number.isNaN(num1) || Number.isNaN(num2)) {
                    result = 'Please enter valid numbers.';
            } else {
                if (op === '+') {
                    result = num1 + num2;
                } else if (op === '-') {
                    result = num1 - num2;
                } else if (op === '*') {
                    result = num1 * num2;
                } else if (op === '/') {
                    result = num2 === 0 ? 'Cannot divide by zero.' : num1 / num2;
                } else {
                    result = 'Invalid operation.';
                }
            }

                output.textContent = `Result: ${result}`;
                console.log('Result:', result);
        });
            </script>
        </body>
    </html>