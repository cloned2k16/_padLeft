'use strict';


var _padLeft        =   { 
                        name:       'Padding from Left side (aka _padLeft)' 
                    ,   desc:       'A module handling Left alignment for string'
                    ,   version:    '0.0.7'
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
  str       = '' + str; 
  ch        = arguments.length<=2 ? ' ' : ''+ch;
  len       = len - str.length;
  
  if (len   <= 0) return str; //nothing to do ..

  var   pad     = ''
  ,     cache
  ,     chSz    = ch.length
  ,     ovrSz   
  ;

  ovrSz     =  (len % chSz);      
  len       =  (len / chSz) >> 0; // force int :D
  
 
        if (ch == '\t') cache = _padLeft.tabs   ;          
  else  if (ch == ' ' ) cache = _padLeft.spaces ;
  else  if (ch == '0' ) cache = _padLeft.zeros  ;
      
  if (cache) {  
    var cLen=cache.length-1;
    if (len <= cLen) return cache[len] + str;
    len-=cLen;
    pad =cache[cLen]
  }
    
  pad += 0==len   ? '' : ch.repeat(len);

  pad += 0==ovrSz ? '' : ch.substring(0, ovrSz);
      
  return pad + str;
}

if (undefined == module) { // browser friendly ... :D
   _String_Prototypes.apply(window);
}
else    { // Node
    require('string_prototypes').apply(global);
    module.exports      = _padLeft.func;
}

