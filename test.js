var leftPad     = require("./");
var test        = require("tape");

test('left pad', function (assert) {
  assert.plan(14);
  assert.strictEqual(leftPad('foo'      ,  5)           , '  foo'   );
  assert.strictEqual(leftPad('foobar'   ,  6)           , 'foobar'  );
  assert.strictEqual(leftPad(1          ,  7,   0)      , '0000001' );
  assert.strictEqual(leftPad(1          ,  2, '-')      , '-1'      );
  assert.strictEqual(leftPad('foo'      ,  2, ' ')      , 'foo'     );
  assert.strictEqual(leftPad('foo'      , -1, ' ')      , 'foo'     );
  assert.strictEqual(leftPad('foo'      ,  7,   1)      , '1111foo' );
  
  
  assert.strictEqual(leftPad('far'      ,  18)          , '               far'      );
  assert.strictEqual(leftPad('far'      ,  19)          , '                far'     );
  assert.strictEqual(leftPad('far'      ,  20)          , '                 far'    );
  assert.strictEqual(leftPad('far'      ,  21)          , '                  far'   );

  assert.strictEqual(leftPad('warning'  , 111, ''      ), 'warning'                 ); // empty padding str
  
  // this is now a feature ...
  assert.strictEqual(leftPad('feature'  ,  1, 'bug or ' ), 'bug or feature'         ); // padding string
  assert.strictEqual(leftPad('feature'  ,  3, 'new '    ), 'new new new feature'    ); // padding string
});
