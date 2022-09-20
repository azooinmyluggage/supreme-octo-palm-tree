var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

var assert = require('assert');
describe('Array', function () {
  describe('#fetchEmployees()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

var assert = require('assert');
describe('Array', function () {
  describe('#fetchVendors()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Array', function () {
    describe('#indexOfEmployee()', function () {
      // pending test below
      it('should return -1 when the value is not present');
    });
  });


var assert = require('assert');
describe('Array', function () {
  describe('#checkBackground()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

var assert = require('assert');
describe('Array', function () {
  describe('#fetchEmployees()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

var assert = require('assert');
describe('Array', function () {
  describe('#fetchVendors()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Array', function () {
    describe('#indexOfEmployee()', function () {
      // pending test below
      it('should return -1 when the value is not present');
    });
  });

var assert = require('assert');
describe('Array', function () {
  describe('#checkBackground()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


var assert = require('assert');
describe('Array', function () {
  describe('#checkPayCreditStatus()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

var assert = require('assert');
describe('Array', function () {
  describe('#checkValidBankAccount()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

var assert = require('assert');
describe('Array', function () {
  describe('#assignDepartment()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

var assert = require('assert');
describe('Array', function () {
  describe('#assignmanager()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([].indexOf(0), -1);
    });
  });
});

var assert = require('assert');
describe('Array', function () {
  describe('#addNewEmployee()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

var assert = require('assert');
describe('Array', function () {
  describe('#putOnHold()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Array', function () {
    describe('#indexOfVendor()', function () {
      // pending test below
      it('should return -1 when the value is not present');
    });
  });

describe('Array', function () {
    describe('#indexOfVendor()', function () {
      // pending test below
      it('should return -1 when the value is not present');
    });
  });

var assert = require('assert');
function add(args) {
  return args.reduce((prev, curr) => prev + curr, 0);
}

describe('add()', function () {
  const tests = [
    {args: [1, 2], expected: 3},
    {args: [1, 2, 3], expected: 6},
    {args: [1, 2, 3, 4], expected: 11}
  ];

  tests.forEach(({args, expected}) => {
    it(`correctly adds ${args.length} args`, function () {
      const res = add(args);
      assert.strictEqual(res, expected);
    });
  });
});