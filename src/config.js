import rebase from 're-base'

var config = {
    apiKey: "AIzaSyBDpbq0fuotW3DECyuwhqWoi6q26UmdJQ0",
    authDomain: "todo-ee815.firebaseapp.com",
    databaseURL: "https://todo-ee815.firebaseio.com",
    storageBucket: "todo-ee815.appspot.com",
    messagingSenderId: "935683475927"
  };

const base = rebase.createClass(config)

export default base
