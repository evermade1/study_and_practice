import requests
client_id = '6duqv66y6u4rsy9s1ktrmutyusw4p7'
client_secret = 'uo1n963ipbl15cg8hksa3wexcsj5v1'
token = 'qhnxjxau3jxtkx3dlt6gqnht9n4psm'
headers = {"Client-Id" : client_id, "Authorization" : "Bearer "+ token}
req = requests.get('https://api.twitch.tv/helix/users?login=109ace', headers=headers)
print(req.json())