window.onload = function() {
	
	var znak_user = 'O';
	var znak_comp = 'X';
	var result = document.getElementsByClassName('result')[0];
	var block_click = document.getElementsByClassName('block');
	var rand_num = Math.round((Math.random() * (9 - 1) + 1));
	
	var exit_flag = false;
	var win_user_array = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  
      for (var i =0; i < block_click.length; i++) {
         block_click[i].addEventListener('click', mainCall);
      }
   
      function buttonRemoveEvent() {
      for (var i =0; i < block_click.length; i++) {
         block_click[i].removeEventListener('click', mainCall);
      }
   }
   
	//Определяем победу игрока
   
	function check_3_user(znak){
		for (var i = 0; i < win_user_array.length; i++) {
		    var Index = win_user_array[i];
			var first = 'cell' + Index[0];
			var second = 'cell' + Index[1];
			var third = 'cell' + Index[2];
            var class1 = document.getElementsByClassName(first)[0].innerHTML;
            var class2 = document.getElementsByClassName(second)[0].innerHTML;
            var class3 = document.getElementsByClassName(third)[0].innerHTML;
			var check = class1 == znak && class2 == znak && class3 == znak;
			if(check){
               document.getElementsByClassName(first)[0].style.cssText = "background-color:#83e2c3;";
               document.getElementsByClassName(second)[0].style.cssText = "background-color:#83e2c3;";
               document.getElementsByClassName(third)[0].style.cssText = "background-color:#83e2c3;";
			   result.innerHTML = 'Вы выиграли!';
				buttonRemoveEvent();
				exit_flag = true;
			}	
		}
	}
	
	//Определяем возможность победы компьютера
	function check_2_comp(znak){
		for (var i = 0; i < win_user_array.length; i++) {
			var Index = win_user_array[i];
			var first = 'cell' + Index[0];
			var second = 'cell' + Index[1];
			var third = 'cell' + Index[2];
			var class1 = document.getElementsByClassName(first)[0].innerHTML;
            var class2 = document.getElementsByClassName(second)[0].innerHTML;
            var class3 = document.getElementsByClassName(third)[0].innerHTML;
			var check1 = class1 == znak && class2 == znak && class3 == '' && exit_flag == false;
			var check2 = class1 == znak && class2 == '' && class3 == znak && exit_flag == false;
			var check3 = class1 == '' && class2 == znak && class3 == znak && exit_flag == false;
			 if(check1){
                document.getElementsByClassName(third)[0].innerHTML = znak;
                document.getElementsByClassName(first)[0].style.cssText = "background-color:#EF7C7C";
               document.getElementsByClassName(second)[0].style.cssText = "background-color:#EF7C7C";
               document.getElementsByClassName(third)[0].style.cssText = "background-color:#EF7C7C";
				result.innerHTML = 'Вы проиграли!';
				buttonRemoveEvent();
				exit_flag = true;
            }    
			
			if(check2){
			   document.getElementsByClassName(second)[0].innerHTML = znak;
			   document.getElementsByClassName(first)[0].style.cssText = "background-color:#EF7C7C";
               document.getElementsByClassName(second)[0].style.cssText = "background-color:#EF7C7C";
               document.getElementsByClassName(third)[0].style.cssText = "background-color:#EF7C7C";
				result.innerHTML = 'Вы проиграли!';
				buttonRemoveEvent();
				exit_flag = true;
			}	
			
			if(check3){
			   document.getElementsByClassName(first)[0].innerHTML = znak;
			   document.getElementsByClassName(first)[0].style.cssText = "background-color:#EF7C7C";
               document.getElementsByClassName(second)[0].style.cssText = "background-color:#EF7C7C";
               document.getElementsByClassName(third)[0].style.cssText = "background-color:#EF7C7C";
				result.innerHTML = 'Вы проиграли!';
				buttonRemoveEvent();
				exit_flag = true;
			}	
		}
	}
	
	//Определяем ход компьютера
	function check_2_user(znak){

		for (var i = 0; i < win_user_array.length; i++) {
		    var Index = win_user_array[i];
			var first = 'cell' + Index[0];
			var second = 'cell' + Index[1];
			var third = 'cell' + Index[2];
            var class1 = document.getElementsByClassName(first)[0].innerHTML;
            var class2 = document.getElementsByClassName(second)[0].innerHTML;
            var class3 = document.getElementsByClassName(third)[0].innerHTML;
            var check1 = class1 == '' && class2 == znak && class3 == znak;
            var check2 = class1 == znak && class2 == '' && class3 ==  znak;
            var check3 = class1 == znak && class2 == znak && class3 == '';
 
			if(exit_flag == false ){
				if(check3){
					document.getElementsByClassName(third)[0].innerHTML = znak_comp;
					exit_flag = true;
				}
			}
						
			if( exit_flag == false ){
				if(check2){
					document.getElementsByClassName(second)[0].innerHTML = znak_comp;
					exit_flag = true;
				}	
			}	
			
			if(check1){
				document.getElementsByClassName(first)[0].innerHTML = znak_comp;
				exit_flag = true;
			}
			
			if(exit_flag) break;
		}
	}
	
	function mainCall(){
		if(this.innerHTML == ''){
			this.innerHTML = znak_user;	
			check_3_user(znak_user);
			check_2_comp(znak_comp);
			check_2_user(znak_user);
			var cell = 'cell';
			if( exit_flag == false ){
				for (var i = 1; i < 10; i++) {	
					if(document.getElementsByClassName(cell + i)[0].innerHTML == ''){
						document.getElementsByClassName(cell + i)[0].innerHTML = znak_comp;
						break;
					}	
				}
			}else {
            exit_flag = false;
            }
		}
	}
};