import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        height: 115,
        backgroundColor: '#3757BE',
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    search: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 12,
        width: 280,
        padding: 4,
        paddingLeft: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        color: 'white',
        fontWeight: 'bold',
        top: -15
    },
    cards: {
        borderWidth: 2,
        borderColor: '#3D69FA',
        width: 370,
        borderRadius: 20,
        padding: 15,
        paddingBottom: 25,
        
    },
    contvagas: {
        alignItems: 'center',
        flex: 6
    },
    row: {
        flexDirection: 'row',
    },
    numvagas: {
        fontWeight: 'bold', 
        left: 20,
        padding: 4,
        borderRadius: 7,
        width:80,
        textAlign: 'center',
        backgroundColor: '#EBEEF5'
    },
    salario: {
        flexDirection: 'row',
    },
    abre: {
        alignItems: 'center',
        top: 14,
    }
})