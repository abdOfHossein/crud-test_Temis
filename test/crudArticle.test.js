const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
chai.use(chaiHttp);
chai.should();

const app=require('../app');

describe('crud article', done => {

    it('creat article', done => {
        chai
            .request(app)
            .post('/article/creat')
            .send({ writer:'behzad',title:'bird' })
            .end((err, res) => {
                if(err){
                 return   console.log(err);
                }
                expect(res).to.have.status(200)
                expect(res.body.status).to.equals('success')
                expect(res.body.result.article).to.equals('article created')
                done();
            })
    });

    it('read article', done => {
        chai
            .request(app)
            .get('/article/read')
            .end((err, res) => {
                if(err){
                 return   console.log(err);
                }
                expect(res).to.have.status(200)
                expect(res.body.status).to.equals('success')
                expect(res.body.result.article).to.equals('article read')
                done();
            })
    });

    it('update article', done => {
        chai
            .request(app)
            .put('/article/update/625c28006a288887121eb674')
            .send({writer:'ali',title:'mammals'})
            .end((err, res) => {
                if(err){
                 return   console.log(err);
                }
                expect(res).to.have.status(200)
                expect(res.body.status).to.equals('success')
                expect(res.body.result.article).to.equals('article updated')
                done();
            })
    });

    it('delete article', done => {
        chai
            .request(app)
            .delete('/article/delete/625c2c445b4e1c99096ed0ae')
            .end((err, res) => {
                if(err){
                 return   console.log(err);
                }
                expect(res).to.have.status(200)
                expect(res.body.status).to.equals('success')
                expect(res.body.result.article).to.equals('article deleted')
                done();
            })
    })
});

