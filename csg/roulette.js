let cards_block = document.querySelector('.cards');
let cards = document.querySelectorAll('.cards > div');
let items = document.querySelectorAll('.items > div');
let brandico = document.querySelectorAll('.bg > div');

//НОМЕР+ЧИСЛО
let all_array = {};
//НОМЕР+ПОДРАНДОМ
let pink_array = {};

//НОМЕР+СОКРАЩЕНИЕ
let all_items = {
  1 : 'ph',
  2 : 'cr',
  3 : 'pd',
  4 : 'rd',
  5 : 'la',
  6 : 'as',
  7 : 'sd',
};
//СОКРАЩЕНИЕ+URL
let all_img = {
  'ph' : 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJS5NO0m5O0m_7zO6_ummpD78A_jOrArNqki1ft8hBrY22lJI_GdgJrZw3Y-FK5yersgcPqvMjLy3JrvT5iuyisReGAWQ/360fx360f',
  'cr' : 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_um25V4dB8teXA54vwxle2qRA4YzyiI46SIA45N1rSqFS9l-jpgsDqv5WcmCAyvCMh5X3cnBKpwUYblsbKgI4/360fx360f',
  'pd' : 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08y5nY6fqPP9ILrDhGpI18h0juDU-LP5iUazrl04YW-lLNSTIVU7ZV3U-FK6ku_tgp_vu53NySZhvSJ35XvUlxS1iB5FcKUx0hzV6cx4/360fx360f',
  'rd' : 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEm1Rd6dd2j6eQ9N2t2wK3-ENsZ23wcIKRdQE2NwyD_FK_kLq9gJDu7p_KyyRr7nNw-z-DyIFJbNUz/360fx360f',
  'la' : 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924gYKChMj4OrzZglRd6dd2j6eUp43wiwfgqkM4Z270LIOUcFA6aF7SqFa5yO7tjJLu7sjIzXFnvSkn-z-DyMloWsFc/360fx360f',
  'as' : 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJQJD_9W7m5a0n_L1JaLummpD78A_2OyYoN6l2AfmrhFqZGGgIIHDdFdoZFjUqFC8w-a9hZ69vp3AmHRn7j5iuyjeBbY3oQ/360fx360f',
  'sd' : 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfw-bbeQJF_-OmgZODqPX4MrjaqWdQ5cx_i_3EyoTwiUKtlB89IT6mOoKUcQU3MFjW-1Tsle28jZ_v7s7Nyndm7yUrtCndzBbjiB9MOONugPOACQLJzb7dmQA/360fx360f',
}
//СОКРАЩЕНИЕ+ЦЕНА
let all_prices = {
  'ph' : 72,
  'cr' : 140,
  'pd' : 1070,
  'rd' : 1044,
  'la' : 1200,
  'as' : 2790,
  'sd' : 6336,
}
//СОКРАЩЕНИЕ+ИМЕНА ЛЕНТЫ
let fname_items = {
  'ph' : '<h3>&nbsp;&nbsp;&nbsp;AWP | Фобос</h3>',
  'cr' : '<h3>USP-S | Извилины</h3>',
  'pd' : '<h3>AK-47 | Буйство красок</h3>',
  'rd' : '<h3>AK-47 | Красная линия</h3>',
  'la' : '<h3>AK-47 | Легион Анубиса</h3>',
  'as' : '<h3>&nbsp;&nbsp;M4A4 | Азимов</h3>',
  'sd' : '<h3>★ Тычковые ножи | Черный глянец</h3>',
}
//СОКРАЩЕНИЕ+ИМЕНА СОДЕРЖИМОГО
let fname_items2 = {
  'ph' : '<h3>AWP | Фобос</h3>',
  'cr' : '<h3>USP-S | Извилины</h3>',
  'pd' : '<h3>AK-47 | Буйство красок</h3>',
  'rd' : '<h3>AK-47 | Красная линия</h3>',
  'la' : '<h3>AK-47 | Легион Анубиса</h3>',
  'as' : '<h3>M4A4 | Азимов</h3>',
  'sd' : '<h3>★ Тычковые ножи | Черный глянец</h3>',
}
//СОКРАЩЕНИЕ+РАРИТЕТНОСТЬ
let rarity = {
  'ph': 1,
  'cr': 2,
  'pd': 2,
  'rd': 2,
  'la': 3,
  'as': 3,
  'sd': 4,
}
//РАРИТЕТНОСТЬ+ЦВЕТ
let rarity_colors = {
  1 : 'vio',
  2 : 'pink',
  3 : 'red',
  4 : 'gold',
}

let block = 1;
let lc_block = 1;
let curr_balance = php_balance;
let curr_login = php_login;
let curr_lc = php_lc;
let price = 0;

for (let i = 0; i < brandico.length; i++) {
  brandico[i].style = "transform: rotate(" + Math.floor(Math.random() * 360) + "deg)";
  var choice = Math.floor(Math.random() * 4) + 1;
  brandico[i].style.backgroundImage = "url('icon" + choice + ".png')";
}

// Заполняем поле СОДЕРЖИМОЕ КЕЙСА
for (let i = 0; i < items.length; i++) {
  // items[i].style = "background-image: url('" + all_items[i + 1] + "1.png');";
  items[i].style.backgroundImage = "url('" + all_img[all_items[i + 1]] + "')";
  items[i].style.backgroundSize = "100px";
  items[i].id = rarity_colors[rarity[all_items[i + 1]]] + "_fade";
  items[i].innerHTML = fname_items2[all_items[i + 1]];
}


function card_filler(card, img, text, id) {
  card.style.backgroundImage = "url('" + img + "')";
  card.style.backgroundSize = "100px";
  card.id = id + "_fade";
  card.innerHTML = text;
  return card;
}


function win_card_filler (card, pic, img, curr_price, id) {
  pic.style.backgroundImage = "url('" + img + "')";  
  pic.style.backgroundSize = "300px";
  price = curr_price;
  jQuery(".price").text(price);
  card.id = id + "_card";
  return price;
}

// Заполняем ЛЕНТУ
for (let i = 0; i < cards.length - 1; i++) {
    //Рандоми содержимое каждой карты
    let point = Math.floor(Math.random() * 100);
    if (point < 5) {
      card_filler(cards[i], all_img[all_items[7]], fname_items[all_items[7]], rarity_colors[4]);
    } else if (point < 20) {
      card_filler(cards[i], all_img[all_items[6]], fname_items[all_items[6]], rarity_colors[3]);
      //LA
    } else if (point < 30) {
      card_filler(cards[i], all_img[all_items[5]], fname_items[all_items[5]], rarity_colors[3]);
      //Kerambit
    } else if (point < 70) {
      // Рандомим содержимое розовой ячейки
      let point2 = Math.floor(Math.random() * 3) + 1;
      if (point2 == 1) {
        card_filler(cards[i], all_img[all_items[2]], fname_items[all_items[2]], rarity_colors[2]);
      } else if (point2 == 2) {
        card_filler(cards[i], all_img[all_items[3]], fname_items[all_items[3]], rarity_colors[2]);
      } else {
        card_filler(cards[i], all_img[all_items[4]], fname_items[all_items[4]], rarity_colors[2]);
      }
      pink_array[i] = point2;
    } else {
      card_filler(cards[i], all_img[all_items[1]], fname_items[all_items[1]], rarity_colors[1]);
    }
    all_array[i] = point;
}


function start() {
  
  if (block < 1 || curr_balance - 899 < 0 || isNaN(curr_balance - 899)) {
    return false;
  } else if(block < 1) {
	return window.location.reload();
  }

  block--;
  curr_balance -= 899;
  $(".balance_for_php").val(curr_balance);
  $(".login_for_php").val(php_login);

  jQuery(".balance").text(curr_balance);

  var random = Math.floor(Math.random() * 25);
  var mark = 1;

  const screenWidth = window.screen.width

  if (screenWidth < 800) {
    while (mark == 1) {
      if (all_array[random + 1] < 30 || (pink_array[random + 1] > 2)) {
        random++;
      } else {
        mark = 0;
      }
    }
	  
	  if (curr_login == "admin") {
		random = 10;
		mark = 1;
		while (mark == 1) {
		if (all_array[random + 1] > 30) {
		  random++;
		} else {
		  mark = 0;
			}
		} 
	  }

	  if (curr_login == "INNOVATIVE") {
		random = 5;
		mark = 1;
		while (mark == 1) {
		if (all_array[random + 1] < 30) {
		  var mini_random = Math.floor(Math.random() * 2);
			if (mini_random > 1) {
				mark = 0;
			}
		  random++;
		  mark = 0;
		} else {
		  random++;
		  }
		} 
	  }
	  
  } else {
  while (mark == 1) {
    if (all_array[random + 2] < 30 || (pink_array[random + 2] > 2)) {
      random++;
    } else {
      mark = 0;
    }
  }
	  
	  if (curr_login == "admin") {
		random = 10;
		mark = 1;
		while (mark == 1) {
		if (all_array[random + 2] > 30) {
		  random++;
		} else {
		  mark = 0;
			}
		} 
	  }

	  if (curr_login == "INNOVATIVE") {
		random = 5;
		mark = 1;
		while (mark == 1) {
		if (all_array[random + 2] < 30) {
		  var mini_random = Math.floor(Math.random() * 2);
			if (mini_random > 1) {
				mark = 0;
			}
		  random++;
		  mark = 0;
		} else {
		  random++;
		  }
		} 
	  }
  }
	
  
  cards_block.style.left = -random * 105 + 'px';

  setTimeout(function() {

    if (screenWidth < 800) {
      random += 1;
    } else {
      random += 2;
    }

    // random += 2;

    let win_value = all_array[random];
    let win_card = document.querySelector('.win_card');
    let win_pic = document.querySelector('.win_pic');

    if (typeof pink_array[random] !== "undefined") {
        if (pink_array[random] == 1) {

          win_card_filler(win_card, win_pic, all_img[all_items[2]], all_prices[all_items[2]] ,rarity_colors[2]);
        
        } else if (pink_array[random] == 2) {

          win_card_filler(win_card, win_pic, all_img[all_items[3]], all_prices[all_items[3]] ,rarity_colors[2]);
        
        } else {

          win_card_filler(win_card, win_pic, all_img[all_items[4]], all_prices[all_items[4]] ,rarity_colors[2]);
        }
    } else if (win_value < 5) {

      win_card_filler(win_card, win_pic, all_img[all_items[7]], all_prices[all_items[7]] ,rarity_colors[4]);

    } else if (win_value < 20) {

      win_card_filler(win_card, win_pic, all_img[all_items[6]], all_prices[all_items[6]] ,rarity_colors[3]);

    } else if (win_value < 30) {

      win_card_filler(win_card, win_pic, all_img[all_items[5]], all_prices[all_items[5]] ,rarity_colors[3]);

    } else {

      win_card_filler(win_card, win_pic, all_img[all_items[1]], all_prices[all_items[1]] ,rarity_colors[1]);
    
    }
    // cards[random].style = 'box-shadow: inset 0px 0px 30px 0px black; background-color: #468faf;' + curr_texture;
    
    // let div = document.createElement('div');
    // div.className = "win_window";
    // document.body.append(div);

    // let btn = document.createElement('button');
    // btn.className = "sell_button";
    // btn.innerHTML = "Продать";
    // document.body.append(btn);
  }, 3000)
  
  // Для блока win_window
  let win_window = document.querySelector('.win_window');

  win_window.style.display = "block";

  setTimeout(function() {
  $( ".win_window" ).animate({ opacity: 1, }, 250 );
  }, 3250)
}


function sell() {
  curr_balance += price;
  $(".balance_for_php").val(curr_balance);
  $(".drop_for_php").val(price);
  jQuery(".balance").text(curr_balance);

  let win_window = document.querySelector('.win_window');
  win_window.style.display = "none";
}

function get() {
  $(".balance_for_php").val(curr_balance);
  get_price = price + 100000;
  $(".drop_for_php").val(get_price);
  jQuery(".balance").text(curr_balance);

  let win_window = document.querySelector('.win_window');
  win_window.style.display = "none";
}

function last_chance() {

  let win_window = document.querySelector('.lc_window');

  win_window.style.display = "block";

  setTimeout(function() {
    $( ".lc_window" ).animate({ opacity: 1, }, 250 );
    }, 50);
}


function balance_add() {

  let win_window = document.querySelector('.pay_window');

  win_window.style.display = "block";

  setTimeout(function() {
    $( ".pay_window" ).animate({ opacity: 1, }, 250 );
    }, 50);
}


function login() {
  let win_window = document.querySelector('.login_window');

  win_window.style.display = "block";

  setTimeout(function() {
    $( ".login_window" ).animate({ opacity: 1, }, 250 );
    }, 50);
}

let old_or_new = 0;

function new_user() {
  let login_window_btn = document.querySelector('.login_window_btn');
  if (old_or_new == 1) {
    old_or_new = 0;
    login_window_btn.innerHTML = "Войти";
  } else {
    old_or_new = 1;
    login_window_btn.innerHTML = "Зарегистрироваться";
  }
}

let rules = 0;

function accept_rules() {
  if (rules == 1) {
    rules = 0;
  } else {
    rules = 1;
  }
}

function getRandomLastChance(max) {
  var amount = Math.floor(Math.random() * max);
  if (amount<40){
      amount = amount + 40;
  }
  return amount;
} 


$(".last_chance_btn").click(function(){

  if (lc_block == 0 || curr_lc != 0) {
    return false;
  }
  lc_block--;
  $(".last_chance_btn").fadeOut(1000);

  var chance_amount = getRandomLastChance(90)/100;

  curr_lc = chance_amount*100;
  $(".lc_for_php").val(curr_lc);
  $(".balance_for_php_2").val(curr_balance);
  $(".login_for_php_2").val(php_login);

  $(".last_chance_show").fadeOut(1000);

  var container=document.getElementById('fade_line_id');
  // container.style.width=300*chance_amount+"px"

  var chance_amount_100 = chance_amount/100
  var main_width = 0
  var count = 1

  var animate_process = setInterval(function() {
      container.style.width = 300 * count * chance_amount_100 + "px";
      count++;

      if (count == 100) {
          clearInterval(animate_process);
          jQuery(".last_chance_show").text(chance_amount);
          $(".last_chance_show").fadeIn(1000);
      }
  }, 20);

  $(".last_chance_btn").fadeIn(1000);

  let use_lc_button = document.querySelector('.use_lc_btn');

  use_lc_button.style.display = "block";

  setTimeout(function() {
    $( ".use_lc_btn" ).animate({ opacity: 1, }, 2000);
    }, 50);
});


$(".close_btn").click(function(){

  var clickId = $(this).attr('id');

  if (clickId == "lc_close_btn") {
    let win_window = document.querySelector('.lc_window');
    win_window.style.display = "none";
  }
  if (clickId == "pay_close_btn") {
    let win_window = document.querySelector('.pay_window');
    win_window.style.display = "none";
  }
  if (clickId == "login_close_btn") {
    let win_window = document.querySelector('.login_window');
    win_window.style.display = "none";
  }

});


jQuery(document).ready(function(){
  jQuery(".balance").text(curr_balance);
});