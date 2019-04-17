var Courses = artifacts.require("./Courses.sol");

contract('Courses', function(accounts) {

  it("should assert true", function(done) {
    var courses = Courses.deployed();
    assert.isTrue(true);
    done();
  });

  // it("Get Instructor", function() {
  //   return Courses.deployed().then(function(instance){
  //     return instance.countInstructors()
  //   })
  // });

});
