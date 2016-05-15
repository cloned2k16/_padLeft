'use strict';

var _padLeft        =   { 
                        name:       'Padding from Left side (aka _padLeft)' 
                    ,   desc:       'A module handling Left alignment for string'
                    ,   version:    '0.0.4'
                    };

_padLeft.spaces     = [ // avoid global pollution & power of 2 size
    ''
  , ' '                 //1
  , '  '                //2
  , '   '           
  , '    '              //4
  , '     '         
  , '      '
  , '       '
  , '        '          //8
  , '         '
  , '          '
  , '           '
  , '            '
  , '             '
  , '              '
  , '               '
  , '                '  //16
];

_padLeft.zeros      = [ // that's another most used case, worth to cache it
    ''
  , '0'                 //1
  , '00'                //2
  , '000'           
  , '0000'              //4
  , '00000'         
  , '000000'
  , '0000000'
  , '00000000'          //8
  , '000000000'
  , '0000000000'
  , '00000000000'
  , '000000000000'
  , '0000000000000'
  , '00000000000000'
  , '000000000000000'
  , '0000000000000000'  //16
];

_padLeft.func       = function  (str, len, ch)  {
  var   pad     = ''
  ,     cache   
  ,     chSz
  ,     strSz
  ;
  
  str       = '' + str; 
  ch        = arguments.length<=2 ? ' ' : ''+ch;
  chSz      = ch .length;
  strSz     = str.length;

  // we now treat chSz > 1 as new feature which let you pad a string with another string
  // while in this case the len argument is interpreted as ''repeat'' padding string n times
  len       = chSz <=0 ?        0 
                : chSz ==1 ?    len - strSz
                    :           len 
            ; 
            
  if (len   <= 0) return str;
  
  // special cases
        if (ch === ' ') cache = _padLeft.spaces;
  else  if (ch === '0') cache = _padLeft.zeros;
  
  if (cache){  
   var cLen=cache.length-1;
   if (len <= cLen) return cache[len] + str;
   len-=cLen;
   pad =cache[cLen]
  }
  
  do {
   pad += (len & 1) ?  ch : '';
   len >>>=1;
   ch+=ch;
  }  
  while (len > 0);

  return pad + str;
}


var module          = module || {};          // browser friendly ... :D
module.exports      = _padLeft.func;


