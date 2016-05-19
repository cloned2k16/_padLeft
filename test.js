var leftPad     = require("./")
,   test        = require("tape")
;

test('_padLeft' , function (assert) {  assert.plan(32);
  
  
  assert.strictEqual(leftPad('foo'      ,  5)           , '  foo'                   );
  assert.strictEqual(leftPad('foobar'   ,  6)           , 'foobar'                  ); // zero
  assert.strictEqual(leftPad('foobar'   ,  4)           , 'foobar'                  ); // negative
  assert.strictEqual(leftPad(1          ,  8,   0)      , '00000001'                ); // 8 digits
  assert.strictEqual(leftPad(123        ,  4, '\t')     , '123'                     ); // tab
  assert.strictEqual(leftPad('foo'      , -1)           , 'foo'                     ); // negative with no padding
  assert.strictEqual(leftPad('foo'      ,  6,   6)      , '666foo'                  ); // 
  // 7
  
  assert.strictEqual(leftPad('far'      ,  18)          , '               far'      );
  assert.strictEqual(leftPad('far'      ,  19)          , '                far'     );
  assert.strictEqual(leftPad('far'      ,  20)          , '                 far'    );
  assert.strictEqual(leftPad('far'      ,  21)          , '                  far'   );
  // 4
  
  assert.strictEqual(leftPad('warning'  , 111, ''       ), 'warning'                ); // empty padding str
  // 1
  
  // this is now a feature ...
  assert.strictEqual(leftPad('feature'  ,  7, 'bug or ' ), 'feature'                ); // padding string
  assert.strictEqual(leftPad('feature'  ,  8, 'bug or ' ), 'bfeature'               ); // padding string
  assert.strictEqual(leftPad('feature'  ,  9, 'bug or ' ), 'bufeature'              ); // padding string
  assert.strictEqual(leftPad('feature'  , 10, 'bug or ' ), 'bugfeature'             ); // padding string
  assert.strictEqual(leftPad('feature'  , 11, 'bug or ' ), 'bug feature'            ); // padding string
  assert.strictEqual(leftPad('feature'  , 12, 'bug or ' ), 'bug ofeature'           ); // padding string
  assert.strictEqual(leftPad('feature'  , 13, 'bug or ' ), 'bug orfeature'          ); // padding string
  assert.strictEqual(leftPad('feature'  , 14, 'bug or ' ), 'bug or feature'         ); // padding string
  assert.strictEqual(leftPad('feature'  , 15, 'bug or ' ), 'bug or bfeature'        ); // padding string
  assert.strictEqual(leftPad('feature'  , 16, 'bug or ' ), 'bug or bufeature'       ); // padding string
  assert.strictEqual(leftPad('feature'  , 17, 'bug or ' ), 'bug or bugfeature'      ); // padding string
  //11
  
  assert.strictEqual(leftPad('feature'  , 21, 'new '    ), 'new new new nefeature'  ); // padding string
  assert.strictEqual(leftPad('feature'  , 22, 'new '    ), 'new new new newfeature' ); // padding string
  assert.strictEqual(leftPad('feature'  , 23, 'new '    ), 'new new new new feature'); // padding string
  // 4
  
  leftPad.setTabSize(4);
  assert.strictEqual(leftPad('tabs'     ,  4, '\t'      ), 'tabs'                   ); // padding with tabs
  assert.strictEqual(leftPad('tabs'     ,  8, '\t'      ), '\ttabs'                 ); // padding with tabs
  assert.strictEqual(leftPad('tabs'     , 12, '\t'      ), '\t\ttabs'               ); // padding with tabs
  leftPad.setTabSize(8);
  assert.strictEqual(leftPad('tabs'     , 64, '\t'      ), '\t\t\t\t\t\t\ttabs'     ); // padding with tabs while still cache hit :D
  assert.strictEqual(leftPad('tabs'     , 65, '\t'      ), '\t\t\t\t\t\t\ttabs'     ); // padding with tabs while still cache hit :D
  assert.strictEqual(leftPad('tabs'     , 66, '\t'      ), '\t\t\t\t\t\t\ttabs'     ); // padding with tabs while still cache hit :D
  // 6  
  
  console.log('\n using version: ',leftPad.obj.version);

});
