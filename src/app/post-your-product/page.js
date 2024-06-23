import './style.css'

export default function page() {
    return (
        <div class="form-container">
        <h1>Post Your Product</h1>
        <form action="/submit-product" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label for="title">Title of the Product</label>
                <input type="text" id="title" name="title" required/>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="price">Set Price</label>
                <input type="number" id="price" name="price" required/>
            </div>
            <div class="form-group">
                <label for="photos">Upload up to 5 Photos</label>
                <input type="file" id="photos" name="photos[]" accept="image/*" multiple required/>
            </div>
            <div class="form-group">
                <label for="name">Name of the User</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div class="form-group">
                <label for="room-number">Room Number of the User</label>
                <input type="text" id="room-number" name="room_number" required/>
            </div>
            <div class="form-group">
                <label for="phone-number">Phone Number</label>
                <input type="tel" id="phone-number" name="phone_number" required/>
            </div>
            <div class="form-group">
                <button type="submit">Post Now</button>
            </div>
        </form>
    </div>
    );
}