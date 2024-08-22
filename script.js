let ctr = 1;
        function deleteTodo(itsCtrNumber) {
            const TaskNumber = document.getElementById(itsCtrNumber);
            TaskNumber.parentNode.removeChild(TaskNumber);
        }

        function addTodo(){
            const inputEl = document.querySelector("input");
            const value = inputEl.value;

            const newDivEl = document.createElement("div");
            newDivEl.setAttribute("id", ctr);
            
            newDivEl.innerHTML = "<div>" + value + '</div><button onclick="deleteTodo(' + ctr + ')">Done</button>';

            document.querySelector("body").appendChild(newDivEl)
            ctr = ctr + 1;
        }
