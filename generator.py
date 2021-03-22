import sys
import json

def oddNumbers(n):
    list = []
    for number in range(1, n, 2):
        list.append(number)
    json_packet = {'numbers': list}
    print(json.dumps(json_packet))

oddNumbers(int(sys.argv[1]))
