SELECT 
    city,
    COUNT(DISTINCT user_id) AS total_users
FROM 
    Users
GROUP BY 
    city
ORDER BY 
    total_users DESC
LIMIT 5;
