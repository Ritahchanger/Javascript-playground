function dfs(graph,start,visited = new Set()){

    console.log(start);

    visited.add(start);

    for(let neighbor of graph[start]){

        if(!visited.has(neighbor)){

            dfs(graph,neighbor,visited);

        }

    }

}