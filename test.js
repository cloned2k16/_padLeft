var leftPad     = require("./");
var test        = require("tape");

test('left pad', function (assert) {
  assert.plan(26);
  
  assert.strictEqual(leftPad('foo'      ,  5)           , '  foo'   );
  assert.strictEqual(leftPad('foobar'   ,  6)           , 'foobar'  );
  assert.strictEqual(leftPad(1          ,  7,   0)      , '0000001' );
  assert.strictEqual(leftPad(1          ,  2, '-')      , '-1'      );
  assert.strictEqual(leftPad('foo'      ,  2, ' ')      , 'foo'     );
  assert.strictEqual(leftPad('foo'      , -1, ' ')      , 'foo'     );
  assert.strictEqual(leftPad('foo'      ,  7,   1)      , '1111foo' );
  //7
  
  assert.strictEqual(leftPad('far'      ,  18)          , '               far'      );
  assert.strictEqual(leftPad('far'      ,  19)          , '                far'     );
  assert.strictEqual(leftPad('far'      ,  20)          , '                 far'    );
  assert.strictEqual(leftPad('far'      ,  21)          , '                  far'   );
  //4
  
  assert.strictEqual(leftPad('warning'  , 111, ''       ), 'warning'                ); // empty padding str
  //1
  
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
  //4
});
