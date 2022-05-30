// Node Event Loop => Single Threaded
// Some of Node Framework / Std Lib => Not Single Threaded 

// if Node were single threaded...
// Thread 1 ( crypto.pdkdf2 (1s) + crypto.pdk (1s) = 2s total)

//ab -c 50 -n 500 localhost:3000/fast



// Questions

// Can we use the threadpool for javascript code or can only nodeJS functions use it?
// We can write custom JS that uses the thread pool

// What functions in node std library use the threadpool
// All 'fs' module functions. Some crypto stuff. Depends on OS

// How does this threadpool stuff fit into the event loop?
// Tasks running in the threadpool are the pendingOperations in our code example

// What functions in node std library use the OS's async features?
// Almost everything around networking for all OS's. Some other stuff is OS specific

// How does this os async stuff async stuff fit into the event loop?
// Tasks using the underlying OS are reflected in our pendingOSTasks array