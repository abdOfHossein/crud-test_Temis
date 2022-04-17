const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
chai.use(chaiHttp);
chai.should();

const app=require('../app');

describe('crud user', done => {

    it('creat user', done => {
        chai
            .request(app)
            .post('/user/creat')
            .send({ writer:'behzad',text:'it is good' })
            .end((err, res) => {
                if(err){
                 return   console.log(err);
                }
                expect(res).to.have.status(200)
                expect(res.body.status).to.equals('success')
                expect(res.body.result.article).to.equals('user created')
                done();
            })
    });

    it('read user', done => {
        chai
            .request(app)
            .get('/user/read')
            .end((err, res) => {
                if(err){
                 return   console.log(err);
                }
                expect(res).to.have.status(200)
                expect(res.body.status).to.equals('success')
                expect(res.body.result.article).to.equals('user read')
                done();
            })
    });

    it('update user', done => {
        chai
            .request(app)
            .put('/user/update/625c1e7177c3b8b5cf5099c5')
            .send({writer:'ali',title:'mammals',text:'mammals are cute'})
            .end((err, res) => {
                if(err){
                 return   console.log(err);
                }
                expect(res).to.have.status(200)
                expect(res.body.status).to.equals('success')
                expect(res.body.result.article).to.equals('user updated')
                done();
            })
    });

    it('delete user', done => {
        chai
            .request(app)
            .delete('/user/delete/625c1e7177c3b8b5cf5099c5')
            .end((err, res) => {
                if(err){
                 return   console.log(err);
                }
                expect(res).to.have.status(200)
                expect(res.body.status).to.equals('success')
                expect(res.body.result.article).to.equals('user deleted')
                done();
            })
    })
});

