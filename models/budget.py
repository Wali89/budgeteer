from psycopg2 import sql
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT 

con = psycopg2.connect("user='postgres' password='password'")

con.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT) 
cur = con.cursor()

# Use the psycopg2.sql module instead of string concatenation 
# in order to avoid sql injection attacs.
cur.execute("CREATE DATABASE BUDGET")