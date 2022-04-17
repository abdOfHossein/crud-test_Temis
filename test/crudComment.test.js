const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
chai.use(chaiHttp);
chai.should();

const app=require('../app');

describe('crud comment', done => {

    it('creat comment', done => {
        chai
            .request(app)
            .post('/comment/creat')
            .send({ writer:'behzad',text:'it is good' })
            .end((err, res) => {
                if(err){
                 return   console.log(err);
                }
                expect(res).to.have.status(200)
                expect(res.body.status).to.equals('success')
                expect(res.body.result.article).to.equals('comment created')
                done();
            })
    });

    it('read comment', done => {
        chai
            .request(app)
            .get('/comment/read')
            .end((err, res) => {
                if(err){
                 return   console.log(err);
                }
                expect(res).to.have.status(200)
                expect(res.body.status).to.equals('success')
                expect(res.body.result.article).to.equals('comment read')
                done();
            })
    });

    it('update comment', done => {
        chai
            .request(app)
            .put('/comment/update/625c28783d658fdfee298530')
            .send({writer:'ali',title:'mammals',text:'mammals are cute'})
            .end((err, res) => {
                if(err){
                 return   console.log(err);
                }
                expect(res).to.have.status(200)
                expect(res.body.status).to.equals('success')
                expect(res.body.result.article).to.equals('comment updated')
                done();
            })
    });

    it('delete comment', done => {
        chai
            .request(app)
            .delete('/comment/delete/625c1e7177c3b8b5cf5099c5')
            .end((err, res) => {
                if(err){
                 return   console.log(err);
                }
                expect(res).to.have.status(200)
                expect(res.body.status).to.equals('success')
                expect(res.body.result.article).to.equals('comment deleted')
                done();
            })
    })
});

