/*
    node cp_3.cjs < graph.txt 
*/

/*

    DFS in Javascript

    function dfs(row, col) {
    if (row < 0 || row >= n || col < 0 || col >= m) return;
    if (grid[row][col] === "." || visited[row][col]) return;

    visited[row][col] = true;

    dfs(row + 1, col); // down
    dfs(row - 1, col); // up
    dfs(row, col + 1); // right
    dfs(row, col - 1); // left
    }


*/

/*

    You are given an undirected graph with n vertices and m edges.
    Your task is to find all connected components of the graph and output their sizes.

    The first line contains:
    n m

    where:
    n = number of vertices
    m = number of edges 

    The next m lines contain:
    u v

    meaning there is an edge between vertex u and vertex v.

    Input:
    5 2
    1 2 
    4 5

    Output:
    1 2 2
*/




