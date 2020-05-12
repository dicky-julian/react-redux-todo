## Simple Todo List Application

This project was created with the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

### How to run this project

run `npm start` to serve on [localhost:3000](http://localhost:3000)

run `npm run build` to run in production

### FYI

#### Providing the `store`

untuk menerapkan `store` pada aplikasi, kita dapat membungkus komponen terluar dengan `<Provide store={store}>`.

#### Connecting Components

terdapat komponen yang menggunakan method `connect` dimana berfungsi untuk membaca nilai dari store(mendeteksi perubahan nilai pada store).

`connect` membutuhkan dua argumen :
- `mapStateToProps` dipanggil ketika terjadi perubahan pada store. Berupa fungsi yang menerima semua state pada store dan mengembalikan objek data untuk digunakan dalam komponen

- `mapDispatchToProps` dapat berupa fungsi ataupun objek. Disebutkan pada [Redux](https://redux.js.org/) :

Jika berbentuk fungsi, itu akan dipanggil sekali pada pembuatan komponen. Itu akan menerima `dispatch` sebagai argumen, dan harus mengembalikan objek penuh fungsi yang digunakan `dispatch` untuk mengirim tindakan.

Jika itu adalah objek yang penuh dengan pembuat tindakan, setiap pembuat tindakan akan diubah menjadi fungsi penyangga yang secara otomatis mengirimkan tindakannya saat dipanggil.

#### Components

- `TodoApp` sebagai entri utama aplikasi yang mencakup komponen `AddTodo`, `TodoList`, dan `VisibilityFilters`.
- `AddTodo` berfungsi memiliki fungsi untuk memasukkan item todo dan menambahkan ke dalam daftar ketika mengklik tombol `Add Todo`. Proses :
    1. Menerima perubahan data melalui input dengan `onChange`
    2. Mengirimkan `action` untuk menambahkan todo ke store ketika mengklik tombol `Add Todo`
- `TodoList` menampung daftar todos dengan melihat status yang dikirimkan ketika `VisibilityFilters` dipilih.
- `Todo` sebagai komponent yang menampilkan data todo (tunggal). Terdapat fungsi untuk merubah status pada object completed (true or false) yang dijalankan pada event `onClick`.
- `VisibilityFilters` mencakup filter (`all`, `completed`, `incomplete`).
    1. Menerima prop `activeFilter` dari induk untuk menunjukkan filter yang digunakan oleh user. 
    2. Mengirimkan action `setFilter` untuk memperbarui filter yang dipilih