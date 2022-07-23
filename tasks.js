document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#button').disabled = true;

    document.querySelector('#task').oninput = () => {
        if (document.querySelector('#task').value.length > 0){
            document.querySelector('#button').disabled = false;
        } else {
            document.querySelector('#button').disabled = true;
        }

    }

    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#task').value;
        if (task == ""){
            document.querySelector('#button').disabled = true;
            return false;
        }
        const li = document.createElement('li');
        li.innerHTML = task;
        document.querySelector('#tasks').append(li);
        document.querySelector('#task').value ='';
        document.querySelector('#button').disabled = true;

        //stop form from submitting data to server to prevent reupload the page
        return false;
    };
});