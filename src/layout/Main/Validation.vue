<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="modal-header">
                <div>
                    <h3>用户信息存留</h3>
                </div>
                <div>

                </div>
            </div>
            <div class="modal-body">
                <input type="text" name="" id="" v-model="email">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-close" @click="confirmModal(false)">关闭</button>
                <button type="button" class="btn-confirm" @click="confirmModal(true)">确认</button>
            </div>
        </div>

    </div>
</template>

 
<script>

export default {
    name: 'modal',
    props: {

    },
    data() {
        return {
            email: ""
        }
    },
    methods: {
        confirmModal() {
            console.log("this.email", this.email)
        }
    }

}
</script>
 
<style>
.modal-backdrop {
    position: absolute;
    background-color: #9898;
    left: 50%;
    top: 50%;

}

.modal {
    padding: 40px;
}
</style>