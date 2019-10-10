const feedbackService = require('../services/feedback.service');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server.js');
const should = chai.should();

chaiHttp.use
chai.use(chaiHttp);


const mockParams = {
  email: 'johndoe@gmail.com',
  subject: 'testing feedback',
  message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, pariatur ut! Beatae non laborum, maiores minus repudiandae officia ratione nam!'
};


describe('feedback service', () => {
  describe('send feedback', () => {
    it("should send the feedback when all params provided", (done) => {
      chai.request(server).post('/feedback').send(mockParams).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('success').eql(1);
        done();
      });
    });
  })
})
