dy {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 20px;
    background-color: #f0f2f5;
    color: #333;
}

header {
    text-align: center;
    padding: 20px 0;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

header h1 {
    color: #1a73e8;
}

main {
    max-width: 900px;
    margin: auto;
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

section {
    margin-bottom: 30px;
}

hr {
    border: 0;
    border-top: 2px dashed #e0e0e0;
    margin: 40px 0;
}

h2 {
    color: #1a73e8;
    border-bottom: 3px solid #1a73e8;
    padding-bottom: 5px;
    margin-bottom: 15px;
}

button {
    padding: 12px 20px;
    background-color: #1a73e8;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #135ac1;
}

input[type="text"], input[type="number"], textarea, select {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
    box-sizing: border-box; /* Ensures padding doesn't affect the width */
}

input:focus, textarea:focus, select:focus {
    border-color: #1a73e8;
    outline: none;
    box-shadow: 0 0 5px rgba(26, 115, 232, 0.5);
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}

.error-message {
    color: #e74c3c;
    font-size: 0.9em;
    display: block;
    margin-top: -10px;
    margin-bottom: 15px;
}

.search-container, .calculator-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
}

.search-container input {
    flex-grow: 1;
    margin-bottom: 0;
}

.search-container button {
    flex-shrink: 0;
}

#total-price {
    font-weight: bold;
    color: #27ae60;
    font-size: 1.2em;
    margin-top: 15px;
}
