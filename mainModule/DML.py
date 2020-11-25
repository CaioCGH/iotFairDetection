import sqlite3

conn = sqlite3.connect('Database.db')
c = conn.cursor()

c.execute("DROP TABLE IF EXISTS observation")
c.execute(
    """
    create table observation(
    id integer primary key AUTOINCREMENT,
    timestamp datetime not null,
    object_name text not null
);"""
)