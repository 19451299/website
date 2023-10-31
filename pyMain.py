# pyMain python file ran by pyscript in the web browser, so I can interact with a SQLite database [locally hosted].
'''
1) it means I can use databases to store lots of data for my website, instead of being forced to use a long js array.
2) it also means that for my assessor to mark my work, they do not have to have other programs installed on their computer (eg: node.js [to import -> SQLite.js]), which would be the easiest way to use SQL directly in javascript.
'''

import sqlite3 as fortnitebattlepass

conn = fortnitebattlepass.connect("dbatest.db")
cursor = conn.cursor()

cursor.execute("CREATE TABLE fortniteTable (year,name,weapon)")

# SQL code
# had to use '' when entering vals as "" conflicts
cursor.execute("INSERT INTO fortniteTable (year,name,weapon) VALUES ('2023','fortnite','sharp tooth shotgun')")

# print rows
for row in cursor.execute("select * from fortniteTable"):
    print(row)

conn.close()
