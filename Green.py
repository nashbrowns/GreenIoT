from firebase import firebase

firebase = firebase.FirebaseApplication('https://greeniot-1c501.firebaseio.com')

firebase.put('/','Temp',3)

Temp = firebase.get('/Temp', None )

Light = firebase.get('/Light', None)

print Temp
print Light
