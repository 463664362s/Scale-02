import json, requests

response = requests.get("http://localhost:21262")
json_data = json.loads(response.text)

notas= {}

for n in range(len(json_data)):
    x = 0
    for p in range(len(json_data)):
        if json_data[p]["Codigo"] in json_data[n]["Fronteiras"]:
            x = x + 1
            notas[json_data[n]["Codigo"]] = x 
        

for i in sorted(notas, key = notas.get, reverse=True):
    for n in range(len(json_data)):
        if i in json_data[n]["Codigo"]:
            #print(json_data[n])
            print(json_data[n]["Nome"],"faz fronteira com", notas[i],"paises:",json_data[n]["Fronteiras"])