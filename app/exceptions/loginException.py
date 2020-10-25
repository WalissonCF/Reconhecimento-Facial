class UserNotFound(Exception):
    
    def __init__(self, mensagem):
        self.mensagem = mensagem
        

    def __str__(self):
        return self.mensagem