-- SQL script to create a 'Notes' table
CREATE TABLE Notes (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Title NVARCHAR(MAX),
    Content NVARCHAR(MAX),
    CreatedAt DATETIME DEFAULT GETDATE()
);
