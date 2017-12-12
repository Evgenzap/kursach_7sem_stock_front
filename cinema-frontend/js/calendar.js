  function digitalWatch() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day=date.getDate();
    var month=date.getMonth();
    var year=date.getFullYear();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("digital_watch").innerHTML =day+ "/" + month + "/" +year+ "<br>" + hours + ":" + minutes + ":" + seconds;
    setTimeout("digitalWatch()", 1000);
  }
function validate_form_aut ( )
{
    valid = true;

        if ( document.contact_form_aut.contact_login_aut.value == "" )
        {
                alert ( "Пожалуйста заполните поле 'Логин'." );
                valid = false;
        }
        if ( document.contact_form_aut.password_aut.value == "" )
        {
                alert ( "Пожалуйста заполните поле 'Пароль'." );
                valid = false;
        }

        return valid;
}
function validate_film_form ( )
{
    valid = true;

        if ( document.film_form.nameFilm.value == "" )
        {
                alert ( "Пожалуйста заполните поле 'Фильм'." );
                valid = false;
        }
        if ( document.film_form.producer.value == "" )
        {
                alert ( "Пожалуйста заполните поле 'Продюсер'." );
                valid = false;
        }
        if ( document.film_form.genre_add.value == "" )
        {
                alert ( "Пожалуйста заполните поле 'Жанр'." );
                valid = false;
        }
        if ( document.film_form.budget.value == "" )
        {
                alert ( "Пожалуйста заполните поле 'Бюджет'." );
                valid = false;
        }
        if ( document.film_form.aids.value == "" )
        {
                alert ( "Пожалуйста заполните поле 'Сборы'." );
                valid = false;
        }
        if ( document.film_form.inputDate_add.value == "" )
        {
                alert ( "Пожалуйста заполните поле 'Дата выхода'." );
                valid = false;
        }
        if ( document.film_form.age_add.value == "" )
        {
                alert ( "Пожалуйста заполните поле 'Возрастное ограничение'." );
                valid = false;
        }
        if ( document.film_form.format_add.value == "" )
        {
                alert ( "Пожалуйста заполните поле 'Формат фильма'." );
                valid = false;
        }

        return valid;
}
function validate_sess_form ( )
{
    valid = true;

        if ( document.sess_form.inputDateSess.value == "" )
        {
                alert ( "Пожалуйста заполните поле 'Дата'." );
                valid = false;
        }
        if ( document.sess_form.inputTimeSess.value == "" )
        {
                alert ( "Пожалуйста заполните поле 'Время'." );
                valid = false;
        }

        return valid;
}
var check = function() {
  if (document.getElementById('password_regist').value ==
    document.getElementById('confirm_password_regist').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
  }
}
var check_edit_user = function() {
  if (document.getElementById('password_edit_user').value ==
    document.getElementById('confirm_edit_user').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
  }
}

