<script>
    import loginDesign from '../../assets/login_design.svg'
</script>

<div class="container">
    <div class="left"></div>
    <div class="right"></div>
    <div class="main">
        <div class="inputs">
            <div class="asdf">
                <p>Username</p>
                <input type="text">
                <p>Password</p>
                <input type="password" name="" id="">
                <input type="button" value="Login">
            </div>
        </div>
        <div class="design">
            <img src="{loginDesign}" alt="SVG art">
        </div>
    </div>
</div>

<style>
    .container
    {
        width: 100vw;
        height: 100vh;
        display: grid;

        grid-template-columns: 1fr 1fr;
        
    }

    .left
    {
        background-color: #ECECEC;
    }

    .right
    {
        background-color: #DBDBDB;
    }

    .main
    {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-radius: 20px;
        padding: 50px;
        width: 50vw;
        height: 50vh;
    }

    .inputs
    {
        height: 100%;
        display: grid;
        align-items: center;
        
        padding: 10%;
    }

    .asdf
    {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    input
    {
        width: 100%;
        border: none;
        border-bottom: 1px solid black;
    }

    input[type=text], input[type=password]
    {
        font-size: 1em;
    }

    input[type=button]
    {
        border: none;
        background-color: black;
        color: white;
        border-radius: 4px;
        height: 3vh;
        margin-top: 10%;

    }

    input:focus
    {
        outline: none;
    }

    .design
    {
        background-color: #2D53A4;
        width: 100%;
        height: 50vh;
        display: grid;
        align-items: center;
        justify-content: center;
        border-left: 1px solid black;
        border-radius: 0px 20px 20px 0px;
    }
</style>