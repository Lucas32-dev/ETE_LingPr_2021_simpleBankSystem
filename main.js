var clients = 
  [ 
    [name = "Felipe",
     token = "123",
     password = "123",
     balance = 1000],
    [name = "Pedro",
     token = "321",
     password = "321",
     balance = 5000
    ]
  ]

while(true)
{
  var clientPosition
  var destiny
  var clientDestinyPosition

  //Types of operations
  var operations = {
    '1': Withdraw,
    '2': Deposit,
    '3': Transfer,
  }

  //Logic of operations
  function findClientDestiny(client, index)
  {
    clientDestinyPosition = index
    if(client[1] == destiny)
    {
      return client  
    }
    return null
  }

  function Balance()
  {
    window.alert("Your balance is : " + clients[clientPosition][3])
  }
  function Withdraw(value)
  {
    if(value > clientFound[3])
      {
        window.alert("Insufficient balance")
        return
      }
    clients[clientPosition][3] -= value
    window.alert("Withdraw made with success")
  }

  function Deposit(value)
  {
    destiny = window.prompt("Insert the token destiny")
    var clientDepositDestiny = clients.find(findClientDestiny)
    if(clientDepositDestiny == null)
      {
        console.log("Client cannot be found")
        return
      }
    var answer = window.prompt("Are you sure uou want deposit to " + clientDepositDestiny[0] + " 1-Yes; 2-                                  No")
    if(answer == 2)
      {
        return
      }
    clients[clientDestinyPosition][3] += value
    window.alert("Deposit made with success")

  }

  function Transfer(value)
  {


    destiny = window.prompt("Insert the token destiny")
    if(destiny == clientFound[1])
      {
        console.log("You cannot transfer to yourself")
        return
      }

    var clientDestiny = (clients.find(findClientDestiny))

    if(clientDestiny == null)
    {
      console.log("Client destiny cannot be found")      
      return
    }

    if(value > clientFound[3])
      {
        window.alert("Insufficient balance")
        return
      }
    clients[clientPosition][3] -= value
    clients[clientDestinyPosition][3] += value
    window.alert("Transference effected")

  }

  //Logic of main system
  var token = window.prompt("Insert your token")
  var password = window.prompt("Insert your password")

  function findClient(client, index)
  {
    if(client[1] == token && client[2] == password)
      {
        clientPosition = index
        return client
      }
    return null
  }

  var clientFound = (clients.find(findClient))

  if(clientFound == null)
  {
    console.log("Client cannot be found")
    //break
  }
  else
  {
    console.log("Client found, position: " + clientPosition) 
    Balance()
    while(true)
      {
        var operation = Number(window.prompt("Choose a operation 1-Withdraw; 2-Deposit; 3-Transfer"))
        var value = Number(window.prompt("Insert a value"))
        if(value >= 0)
          {
            break
          }
        window.alert("Invalid value")
      }
    operations[operation](value)
  }
  var stillWantUse = Number(window.prompt("Do you want to exit? 1-Yes; 2-No"))
  if(stillWantUse == 1)
    {
      break
    }
}
