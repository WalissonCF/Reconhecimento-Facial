class UserNotFound(Exception):
    
    def __init__(self, mensagem):
        self.mensagem = mensagem
        

    def __str__(self):
        return "Error: {}".format(self.mensagem)