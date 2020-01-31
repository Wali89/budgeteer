import psycopg2
from psycopg2 import Error
 


def create_tables():
   
    commands = (
        
        """CREATE TABLE categories(id SERIAL PRIMARY KEY, 
        text VARCHAR(40) not null)"""
    
    )


    conn = psycopg2.connect("user=postgres password='password'")

    try:
        # read the connection parameters
        
        # connect to the PostgreSQL server
        conn = psycopg2.connect("user='postgres' password='password'")
        cur = conn.cursor()
        # create table one by one
        
        cur.execute(commands)
        # close communication with the PostgreSQL database server
        cur.close()
        # commit the changes
        conn.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
 
 
if __name__ == '__main__':
    create_tables()