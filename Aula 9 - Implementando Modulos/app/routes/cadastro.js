module.exports = function(server){
    server.get('/cadastro', function(req, res){
        res.render('cadastro/cadastro');
    });

    server.post('/cadastro/salvar', function(req, res){
        // Recupera notícia
        var noticia = req.body; // Realiza um parser do texto do body para JSON

        var connection = server.config.dbConnection(); // Abre sessão.
        var noticiaModel = server.app.models.noticiaModel; // Instancia o módulo.

        // Salva notícia
        noticiaModel.salvarNoticia(noticia, connection, function(error, result){
            res.redirect('/'); // Depois do cadastro, retorna para a lista de notícias
        });
    });
};


