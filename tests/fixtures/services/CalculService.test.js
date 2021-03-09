const assert = require('assert');
const sinon = require('sinon');

describe('CalculService', function () {

  describe('#addition', function () {
    it('should add values', function () {
      const result = CalculService.addition(1, 5);
      assert.equal(result,6);
    });
  });

  describe('#soustraction', function () {
    it('should substrat values', function () {
      const result = CalculService.soustraction(5, 2);
      assert.equal(result, 3);
    });
  });

  describe('#multiplication', function () {
    it('should multiply values', function () {
      const result = CalculService.multiplication(5, 2);
      assert.equal(result,10);
    });
  });

  describe('#division', function () {
    it('should divide values', function () {
      const result = CalculService.division(21, 3);
      assert.equal(result,7);
    });
    it('should not divide by 0', function () {
      try{
        CalculService.division(10, 0)
      }catch (e){
        assert(e.message, 'Division par 0 non autorisé');
        return;
      }
      assert(false);
    });
  });

  describe('#pourcentage', function () {
    it('should return pourcentage', function () {
      const stub2 = sinon.stub(CalculService, 'division').callsFake(function (a, b){ return 0.2});
      const stub1 = sinon.stub(CalculService, 'multiplication').callsFake(function (a, b){ return 20});
      const result = CalculService.pourcentage(2, 10);
      assert.equal(result,20);
      // Cleanup
      CalculService.multiplication.restore();
      CalculService.division.restore();
    });
    it('should call div and mul', function () {
      const spyMul = sinon.spy(CalculService, 'multiplication');
      const spyDiv = sinon.spy(CalculService, 'division');
      CalculService.pourcentage(2, 10);
      assert(spyDiv.calledOnce);
      assert(spyMul.calledImmediatelyAfter(spyDiv))
      // Cleanup
      CalculService.multiplication.restore();
      CalculService.division.restore();
    });
  });

  describe('#carre', function () {
    it('should return square', function () {
      const result = CalculService.carre(5);
      assert.equal(result,25);
    });
  });
})
